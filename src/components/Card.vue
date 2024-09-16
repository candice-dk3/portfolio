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
        width: 380px;
        height: 270px;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        color: white;
        background-color: rgb(255, 245, 0, 12%);
        border: 3px solid #fff70094;
        border-radius: 50px;
    }
</style>