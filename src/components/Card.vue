<template>
    <div class="card" >
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Card'
}
</script>
<style scoped>
    .card{
        background-color: #ffd9000c;
        border-radius: 3rem;
        padding: 1.5rem;
    }
</style>