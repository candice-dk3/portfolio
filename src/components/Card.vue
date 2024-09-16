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
.card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 380px;
    height: 100%;
    color: black;
}
</style>