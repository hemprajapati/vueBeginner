<template>
    <div class="wrapper container-fluid position-relative">
        <div v-if="error.isVisible"
            class="position-absolute d-flex justify-content-center align-items-center card error-msg">
            <h6 class="text-danger">{{ error.errorName }}</h6>
        </div>
        <div class="py-3 flex justify-content-end">
            <button class="btn btn-primary" :disabled="!lists[lists.length - 1].name" @click="createNewList()">Add new
                List</button>
        </div>
        <div class="trello">
            <div class="d-flex gap-5">
                <draggable :list="lists" class="w-100 d-flex gap-4 my-3" group="people" @start="dragging = true"
                    @end="dragging = false">
                    <template #item="{ element, index }">
                        <div class="col-12 col-sm-8 col-md-5 col-lg-3 card-list">
                            <div class="mx-3 p-0 d-flex justify-content-between align-items-center">
                                <div class="m-0 p-0 flex-grow-1">
                                    <input @input="handleChange($event)" @keyup="getKeyCode($event, element)"
                                        class="heading my-2 py-1" v-if="element.isEditable" type="text"
                                        :defaultValue="element.name" autofocus placeholder="create new trello...">
                                    <p class="heading my-2 py-1" v-else @click="toggleFeild(element)">
                                        {{ element.name }}
                                    </p>
                                </div>
                                <div class="">
                                    <div v-if="!element.isEditable" @click="element.toggle = !element.toggle"
                                        class="position-relative circle my-2">
                                        <div v-if="element.toggle" class="card p-1 action-card position-absolute">
                                            <p @click="addNewCard(element.block)" class="m-0 ps-2 py-1">add new card</p>
                                            <p @click="deleteStep(index)" class="m-0 ps-2 py-1">delete step</p>
                                        </div>
                                    </div>
                                    <div v-else class="d-flex align-items-center justify-content-center gap-2">
                                        <img src="../assets/images/true.svg" alt="" @click="updateHeading(element)">
                                        <img v-if="!element.isFirstTimeCreated" src="../assets/images/false.svg" alt=""
                                            @click="setHeadingAsItis(element)">
                                    </div>
                                </div>
                            </div>
                            <draggable :list="element.block" group="people1">
                                <p>{{ element.block }}</p>
                                <template #item="{ element }">
                                    <div class="card">
                                        <input @input="handleChange($event)" @keyup="getKeyCode($event, element)"
                                            class="my-0 py-0" v-if="element.isEditable" type="text"
                                            :defaultValue="element.name" autofocus>
                                        <p v-else @click="toggleFeild(element)" class="my-0 py-0">{{
                                            element?.name }}</p>
                                        <div v-if="element.isEditable"
                                            class="my-1 border-top d-flex justify-content-end align-items-center gap-3 pt-2">
                                            <img src="../assets/images/true.svg" alt="" @click="updateHeading(element)">
                                            <img v-if="!element.isFirstTimeCreated" src="../assets/images/false.svg" alt=""
                                                @click="setHeadingAsItis(element)">
                                            <img v-if="!element.isFirstTimeCreated" src="../assets/images/trans.svg" alt=""
                                                @click="deleteCard(element, index)">
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </template>
                </draggable>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, ref } from 'vue'
import draggable from "vuedraggable";

export default {
    name: "Trello",
    components: {
        draggable
    },
    setup() {
        const currentHeading = ref('')
        const error = reactive({
            errorName: '',
            isVisible: false
        })
        const lists = ref(
            [
                {
                    name: "To Do",
                    isEditable: false,
                    isFirstTimeCreated: false,
                    toggle: false,
                    block: [
                        { name: "John", id: 1, isEditable: false, isFirstTimeCreated: false },
                        { name: "Joao", id: 2, isEditable: false, isFirstTimeCreated: false },
                        { name: "Jean", id: 3, isEditable: false, isFirstTimeCreated: false },
                        { name: "Gerard", id: 4, isEditable: false, isFirstTimeCreated: false }
                    ]
                },
                {
                    name: "Pending",
                    isEditable: false,
                    isFirstTimeCreated: false,
                    toggle: false,
                    block: [
                        { name: "Juan", id: 1, isEditable: false, isFirstTimeCreated: false },
                        { name: "Edgard", id: 2, isEditable: false, isFirstTimeCreated: false },
                        { name: "Johnson", id: 3, isEditable: false, isFirstTimeCreated: false }
                    ]
                }
            ]
        )
        const createNewList = () => {
            lists.value.push({ name: '', block: [], isFirstTimeCreated: true, isEditable: true, toggle: false })
        }
        const setHeadingAsItis = (args) => {
            args.isEditable = false
            currentHeading.value = ''
        }
        const updateHeading = (args) => {
            if (currentHeading.value.length > 0) {
                args.name = currentHeading.value
                args.isEditable = false;
                args.isFirstTimeCreated = false
                currentHeading.value = ''
            }
            else {
                generateToggle("this feild cant be Empty")
            }
        }
        const generateToggle = (msg) => {
            error.errorName = "this feild Cant be empty"
            error.isVisible = true

            setTimeout(() => {
                error.isVisible = false
            }, 3000)
        }
        const addNewCard = (args) => {
            args.push({ name: "", isEditable: true, isFirstTimeCreated: true, id: generateID(args) })
        }
        const handleChange = ($event) => {
            currentHeading.value = $event.target.value
        }
        const generateID = (args) => {
            return args.length + 1;
        }
        const getKeyCode = ($event, args) => {
            if ($event.keyCode === 13) {
                updateHeading(args)
            }
        }
        const deleteCard = (element, index) => {
            lists.value[index].block.splice(lists.value[index].block.findIndex((item) => item === element), 1)
        }
        const deleteStep = (index) => {
            lists.value.splice(index, 1)
        }
        const toggleFeild = (element) => {
            element.isEditable = !element.isEditable
            currentHeading.value = element.name
        }
        return {
            lists, createNewList, error, getKeyCode, updateHeading, setHeadingAsItis, handleChange, addNewCard, deleteStep, currentHeading, deleteCard, toggleFeild
        }
    }
}
</script>

<style>
.flex {
    display: flex;
    gap: 3rem;
}

.wrapper {
    min-height: 100vh;
    padding: 1rem;
}

.card-list {
    box-shadow: -12px 22px 50px rgb(208, 208, 208);
    background: #f4f4f4;
    border-radius: 10px;
    border: 1px solid rgb(228, 228, 228) !important;
    padding: 16px 12px;
}

.card {
    border: 0.02vw solid #dbdbdb !important;
    background-color: rgb(255, 255, 255) !important;
    margin: 6px 12px;
    padding: 13px;
    box-shadow: -6px 14px 15px #dbdbdb;
}

.card p {
    color: #6a6a6a;
    font-weight: 400;
    letter-spacing: 0.03em;
    font-size: 16px;
}

input {
    outline: none !important;
    border: none !important;
    background-color: rgba(255, 222, 173, 0) !important;
    width: 100%;
}

.heading {
    color: #656565;
    letter-spacing: 0.1vw;
    font-size: 20px !important;
    font-weight: 500;
}

.border-bottom {
    /* border-bottom: 0.1rem solid #d0d0d0 !important; */
}

.circle,
.circle::before,
.circle::after {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #959595;
}

.circle {
    position: relative;
    display: block;
    cursor: pointer;

}

.circle::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -8px;

}

.circle::after {
    content: '';
    top: 0px;
    left: 8px;
    position: absolute;

}

.circle .action-card {
    top: 10px;
    right: -20px !important;
    z-index: 400;
    width: 160px;
}

.error-msg {
    width: 78vw;
    max-width: 52em;
    left: 50%;
    transform: translate(-50%);
    border: none !important;
    background-color: rgba(254, 162, 162, 0.264) !important;
}
.trello{
    border: 1px solid red;
    overflow: auto;
    height: calc(100vh - 6rem);
}
img {
    height: 22px;
    width: 22px;
    cursor: pointer;
}

h6 {
    letter-spacing: 0.1em;
}

.btn-close {
    right: 12px;
    cursor: pointer !important;
}
</style>