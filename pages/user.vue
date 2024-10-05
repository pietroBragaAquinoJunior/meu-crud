<template>
    <div>
        <h2>User page.</h2>
        <p>This page is special because it uses methods that consume PostgreSQL instances.</p>
        {{ users }}
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import client from '~/plugins/db.ts'

    definePageMeta({
        layout: 'default'
    })

    const users = ref([])

    onMounted(() => {
        console.log("AAAAAAAAAAAHHHHHHHH")
    })

    async function getUsers() {
        const result = await client.query('SELECT * FROM users')
        return result.rows
    }
</script>


<style>

</style>
