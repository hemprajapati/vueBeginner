<template>
	<div class="d-flex justify-content-between align-items-end w-100">
		<div class="col-md-3">
			<label for="" class="ms-1 mb-2 fw-bold">Select Records per Pages</label>
			<select class="form-select" v-model="noOfRecordPerPage">
				<option v-for="({ value, title }, index) in recordOptions" :key="index" :value="value">{{ title }}</option>
			</select>
		</div>
		<div class="col-md-3"><input class="form-control" v-model="searchTerm" placeholder="Search record here..."></div>
	</div>
	<table class="mt-5 table table-striped table-bordered">
		<thead>
			<tr>
				<th v-for="({ name, key }, index) in columnList" :key="index"
					:class="{ 'bg-violate': key === Object.keys(sorting)[0] }" v-on:click="setsortColumnName(key)">
					<div style="cursor: pointer;" class="d-flex justify-content-between align-items-center">
						<span :class="{ 'color-violate': key === Object.keys(sorting)[0] }">{{ name }}</span>
						<unicon v-if="key === Object.keys(sorting)[0]" height="20" width="20" fill="#7a1ad9dd"
							:name="Object.values(sorting)[0] === 'asc' ? 'angle-up' : 'angle-down'"></unicon>
						<unicon v-else name="direction" fill="#61616183"></unicon>
					</div>
				</th>
			</tr>
		</thead>
		<tbody>
			<template v-if="Datarow.length">
				<tr v-for="(res, index) in Datarow" :key="index">
					<th scope="row">{{ ((currentPage - 1) * noOfRecordPerPage) + index + 1 }}</th>
					<td v-for="(col, i) in columnList.filter(f => f.key.length > 0)" :key="i">
						<span
							:class="{ 'highlight': col.key && searchTerm.length > 0 && res[col.key].toLowerCase().includes(searchTerm.toLowerCase()) }">
							{{ col.key && res[col.key] }}
						</span>
					</td>
				</tr>
			</template>
			<td colspan="5" v-else>
				<h5 class="text-center m-0 p-2 text-muted">No Record Found</h5>
			</td>
		</tbody>
	</table>
	<div class="d-flex justify-content-center align-items-center" v-if="Datarow.length">
		<button v-for="page in ['dec', ...pageNumerList, 'inc']" :key="page" style="width: 34px; height: 32px;"
			class="btn my-0 mx-1 p-0 text-center text-muted border-0" :class="{ active: page.index === currentPage }"
			:disabled="page.index === '...' || (page === 'dec' && currentPage === 1) || (page === 'inc' && currentPage === noOfPages)"
			@click="changePage(page)">{{ page === 'dec' ? '←' : (page === 'inc' ? '→' : page?.index) }}
		</button>
	</div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import axios from 'axios';
export default {
	name: "Home",
	setup() {
		const sorting = ref({})
		const columnList = ref([{
			name: "#",
			key: '',
		},
		{
			name: "First Name",
			key: 'first_name',
		},
		{
			name: "Last Name",
			key: 'last_name',
		},
		{
			name: "Email Address",
			key: 'email',
		},
		{
			name: "Mobile Number",
			key: 'phone',
		}])
		const recordOptions = ref([{
			value: 20,
			title: "20 Records",
		},
		{
			value: 50,
			title: "50 Records",
		},
		{
			value: 75,
			title: "75 Records",
		},
		{
			value: 100,
			title: "100 Records",
		}])
		const dataList = ref([])
		const noOfRecordPerPage = ref(20)
		const noOfPages = ref(null)
		const currentPage = ref(1)
		const Recordfrom = ref(0)
		const RecordTo = ref(20)
		const searchTerm = ref('')
		const searchData = ref([])
		onMounted(() => loadData());
		const Datarow = computed(() => {
			const [sortcolumn, searchElement] = ([Object.keys(sorting.value).length, searchTerm.value.toLowerCase().trim()])
			const column_name = Object.keys(sorting.value)[0];
			const sortOrder = Object.values(sorting.value)[0];
			if (searchTerm.value) {
				searchData.value = sortcolumn > 0 ? sortData(searchdata(searchElement), column_name, sortOrder) :
					searchdata(searchElement)
				return searchData.value.filter((item, index) => index >= Recordfrom.value && index <= RecordTo.value)
			}
			else if (sortcolumn > 0)
				return sortData(dataList.value.slice(), column_name, sortOrder).filter((item, index) => index + 1 >= Recordfrom.value && index < RecordTo.value)
			return dataList.value.filter((item, index) => index + 1 >= Recordfrom.value && index < RecordTo.value)
		})
		const pageNumerList = computed(() => {
			const Pagelist = new Array(noOfPages.value).fill(null).map((item, index) => ({ index: index + 1 }))
			let [head, middle, tail] = [Pagelist.slice(0, 1), Pagelist.slice(currentPage.value - 2, currentPage.value + 1), Pagelist.slice(-1)]
			if (noOfPages.value <= 6) return Pagelist.slice(0, 6);
			if (currentPage.value <= 3 || (noOfPages.value - currentPage.value) < 3) {
				let [middle, tail] = ([Pagelist.slice(1, 4), Pagelist.slice(0 - 4)]);
				return [...head, ...middle, { index: '...' }, ...tail];
			}
			return [...head, { index: '...' }, ...middle, { index: '...' }, ...tail];
		})
		watch([noOfRecordPerPage, searchTerm, sorting], () => currentPage.value = 1)
		watch([noOfRecordPerPage, searchTerm, currentPage, searchData], () => pageConfig())
		const loadData = () => {
			axios.get("https://mocki.io/v1/c3c1ec04-af61-44b1-8f7d-b3f96c060562").then(response => {
				if (response.status === 200) {
					dataList.value = response?.data
					pageConfig();
				}
			}).catch(e => console.log(e))
		};
		const changePage = (args) => {
			args === 'inc' ? currentPage.value += 1 : args === 'dec' ? currentPage.value -= 1 : currentPage.value = args?.index
		}	
		const pageConfig = () => {
			noOfPages.value = searchTerm.value ? Math.ceil(searchData.value.length / noOfRecordPerPage.value) : Math.ceil(dataList.value.length / noOfRecordPerPage.value);
			Recordfrom.value = (noOfRecordPerPage.value * (currentPage.value - 1));
			RecordTo.value = Recordfrom.value + noOfRecordPerPage.value
		}
		const setsortColumnName = (key) => {	
			sorting.value[key] === 'des' ? sorting.value = {} : sorting.value[key] = sorting.value[key] === 'asc' ? 'des' : 'asc'
		}
		const sortData = (data, columnName, orderType) => {
			return data.sort((curEle, preEle) => {
				const cmp = String(curEle[columnName]).localeCompare(String(preEle[columnName]))
				return orderType === 'asc' ? cmp : -cmp
			})
		}	
		const searchdata = searchElement => {
			return dataList.value.filter((item, index) => columnList.value.some(({ key }) =>
				key.length > 0 && item[key].toLowerCase().includes(searchElement)
			))
		}
		return {
			Datarow, columnList,
			noOfRecordPerPage, noOfPages, currentPage, Recordfrom, RecordTo,
			searchTerm, recordOptions,
			pageNumerList, changePage,
			setsortColumnName, sorting,
		}
	},
}
</script>
<style scoped>
button:hover {
	background-color: #791ad983; 
	color: rgb(244, 244, 244) !important;
	box-shadow: 8px 12px 15px rgba(159, 159, 159, 0.512);
}

.color-violate {
	color: #813ac8dd;
}

.bg-violate {
	background-color: #9e02e620;
}

.active {
	background-color: rgba(121, 26, 217, 0.512) !important;
	color: rgb(244, 244, 244) !important;
	box-shadow: 12px 14px 15px rgba(209, 209, 209, 0.873);
}

.highlight {
	color: rgb(255, 255, 255);
	background-color: rgba(84, 21, 148, 0.7) !important;
}
</style>