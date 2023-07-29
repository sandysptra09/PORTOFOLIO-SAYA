<script setup>
import { Toast } from 'flowbite-vue'
import { ref } from 'vue';

const isShowToast = ref(false)
function closeToast() {
    isShowToast.value = false
}
function showToast() {
    isShowToast.value = true
}
</script>

<template>
    <div class="container my-24 mx-auto md:px-6">
        <!-- Section: Design Block -->
        <section class="mb-28">
            <div class="flex justify-center">
                <div class="text-center md:max-w-xl lg:max-w-3xl">
                    <h2 class="mb-12 px-6 text-3xl font-bold">Hubungi Saya</h2>
                </div>
            </div>

            <div class="flex flex-wrap">
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                    <form>
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <label for="first_name"
                                class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Nama</label>
                            <input type="text"
                                class="peer block min-h-[auto] w-full rounded border-20 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput90" placeholder="Name" />

                        </div>
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <label for="first_name"
                                class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Email</label>
                            <input type="email"
                                class="peer block min-h-[auto] w-full rounded border-20 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput91" placeholder="Email address" />

                        </div>
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <label for="first_name"
                                class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Pesan</label>
                            <textarea
                                class="peer block min-h-[auto] w-full rounded border-20 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>

                        </div>
                        <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                            <input
                                class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="checkbox" value="" id="exampleCheck96" checked />
                            <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                                Kirim saya salinan pesan ini
                            </label>
                        </div>
                        <button @click="showToast" type="button" data-te-ripple-init data-te-ripple-color="light"
                            class="mb-6 inline-block w-full rounded bg-yellow-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            Kirim
                        </button>
                        <Toast :type="'success'" closable v-if="isShowToast" @close="closeToast"
                            class="fixed top-5 right-5">
                            Berhasil dikirim !
                        </Toast>
                    </form>
                </div>
                <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                    <div class="flex flex-wrap">
                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                            <div class="flex items-start">
                                <div class="shrink-0">
                                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-6 grow">
                                    <p class="mb-2 font-bold dark:text-white">
                                        Nomor Bisnis
                                    </p>

                                    <p class="text-neutral-500 dark:text-neutral-200">
                                        +62 8141 2486 9596
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                            <div class="flex items-start">
                                <div class="shrink-0">
                                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                        </svg>

                                    </div>
                                </div>
                                <div class="ml-6 grow">
                                    <p class="mb-2 font-bold dark:text-white">
                                        Alamat Sekolah
                                    </p>
                                    <p class="text-neutral-500 dark:text-neutral-200">
                                        Jl. Situ Tarate Cibaduyut, Cangkuang Kulon, Kec. Dayeuhkolot
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                            <div class="align-start flex">
                                <div class="shrink-0">
                                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-6 grow">
                                    <p class="mb-2 font-bold dark:text-white">Email Bisnis</p>
                                    <p class="text-neutral-500 dark:text-neutral-200">
                                        saputraSandy@gmail.com
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                            <div class="align-start flex">
                                <div class="shrink-0">
                                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>

                                    </div>
                                </div>
                                <div class="ml-6 grow">
                                    <p class="mb-2 font-bold dark:text-white">Alamat Rumah</p>
                                    <p class="text-neutral-500 dark:text-neutral-200">
                                        Jl. Leuwidulang Desa Rancamulya Kec. Pameungpeuk
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->
</div></template>