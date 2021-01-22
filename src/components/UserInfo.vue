<template>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-6" v-if="user.picture">
        <div class="px-4 py-5 sm:px-6">
            <img alt="RandomMe" :src="user.picture.large" class="block mx-auto rounded-full">
        </div>
        <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
            Fake User Information <br> <small>(data credit - https://randomuser.me/ )</small>
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Fake Personal details.
            </p>
        </div>
        <div class="border-t border-gray-200" v-if="user">
            <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                    Full name
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ user.name.title +' '+user.name.first+' '+user.name.last }}
                    </dd>
                </div>

                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                    Gender
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ user.gender }}
                    </dd>
                </div>

                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                    Age
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ user.dob.age + ' Years' }}
                    </dd>
                </div>
                
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                    Phone
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ user.phone }}
                    </dd>
                </div>

                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                    Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ user.email }}
                    </dd>
                </div>
                
                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                    Address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="font-bold">Street</span>: {{ user.location.street.number +' '+user.location.street.name }}, 
                        <span class="font-bold">City</span>: {{ user.location.city }},
                        <span class="font-bold">Country</span>: {{user.location.country}},
                        <span class="font-bold">State</span>: {{user.location.state}},
                        <span class="font-bold">PostCode</span>: {{user.location.postcode}} 
                    </dd>
                </div>
            
            </dl>
        </div>
        <a @click="getUser" href="#" class="block no-underline text-center mx-auto bg-green-400 py-6 hover:bg-green-600 hover:text-white">Refresh <i class="fas fa-sync"></i></a>
    </div>

</template>

<script>

export default {
    name: 'UserInfo',
    data() {
        return {
            user: '',
            page: 2,
            results: 10,
            seed: 'foobar'
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            this.axios.get(`https://randomuser.me/api/?exc=login,registered,nat,page=${this.page},results=${this.results}`)
                .then( ({data}) => {
                    this.user = data.results[0]
                    console.log(data)
                })
                .catch( err => {
                    console.error(err)
                })
        }
    }
}
</script>

<style>

</style>