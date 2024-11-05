<script setup lang="ts">
import { toRefs } from 'vue'
import { type Data } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
    data: Data
    id: string
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { data } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const editer = () => {

// router.push({ name: 'passenger-detail-view' })
store.updateMessage('You are successuflly edited for ' + props.data.name)
setTimeout(() => {
store.resetMessage()
}, 5000)
router.push({ name: 'passenger-detail-view', params: { id: props.data._id } })

}

</script>
<template>
    <p>Edit  here</p>
    <button @click="editer">Editer</button>
</template>