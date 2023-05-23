<template>
    <div class="basis-1 md:basis-1/2 lg:basis-1/2 z-10 w-full">
        <p v-if="heading" class="text-center md:text-left font-semibold text-[#FF64AE] text-base"> Contact Us</p>
        <p v-if="title" class="text-center md:text-left font-semibold text-[#091156] text-3xl md:text-4xl my-3 leading-10">
            Send your inquiry to our expert team</p>
        <p v-if="subTitle" class="text-center md:text-left text-normal leading-6 text-[#8B8B8B]">Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consequuntur consectetur perspiciatis eligendi ut labore.</p>
        <Form action="" @submit="onSubmit">
            <div class="mt-12 md:mt-4">
                <div class="my-3 flex flex-col md:flex-row gap-4 w-full">
                    <div class="flex flex-col w-full">
                        <Field type="text" placeholder="First name" name="fname" :rules="requiredfeild" />
                        <ErrorMessage class="text-[#dc2626] ms-2 block mb-1" name="fname" />
                    </div>
                    <div class="flex flex-col w-full">
                        <Field type="text" placeholder="Last name" name="lname" :rules="requiredfeild" />
                        <ErrorMessage class="text-[#dc2626] ms-2 block mb-1" name="lname" />
                    </div>
                </div>
                <div class="flex flex-col">
                    <Field type="text" class="my-3" placeholder="Email address" name="email" :rules="validateEmail" />
                    <ErrorMessage class="text-[#dc2626] ms-2 block mb-1" name="email" />
                </div>
                <div class="flex flex-col">
                    <Field type="text" class="my-3" placeholder="Subject message" name="subject" :rules="requiredfeild" />
                    <ErrorMessage class="text-[#dc2626] ms-2 block mb-1" name="subject" />
                </div>
                <div class="flex flex-col">
                    <Field type="textarea" class="my-3" placeholder="Your inquiry here" name="inquiry"
                        :rules="requiredfeild" />
                    <ErrorMessage class="text-[#dc2626] ms-2 block mb-1" name="inquiry" />
                </div>

                <button type="submit"
                    class="inline-block py-4 px-9 rounded-full font-semibold tracking-widest bg-[#FF64AE] text-white">Send
                    Message</button>
            </div>
        </Form>
    </div>
</template>
<script>

import { reactive, ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
    name: "ContactForm",
    props: ['heading', 'title', 'subTitle'],
    components: {
        Form, Field, ErrorMessage
    },
    setup() {
        const onSubmit = (value) => {
            console.log(value)
        }
        const requiredfeild = (value) => {
            if (!value) {
                return "This feild cann't be empty"
            }
            return true
        }
        const validateEmail = (value) => {
            if (!value) {
                return "This feild cann't be empty"
            }
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This field must have valid email';
            }
            return true;

        }
        return {
            onSubmit,
            validateEmail,
            requiredfeild
        }
    }
}
</script>

<style scoped>
input,
textarea {
    border: 1px solid #D9DDFE;
    height: 52px;
    width: 100%;
    border-radius: 12px;
    padding-left: 24px;
    color: #091156;
}

textarea {
    height: 120px !important;
    padding-top: 14px;
}

input::placeholder,
textarea::placeholder {
    color: #C5C5C5;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.1em;
}
</style>