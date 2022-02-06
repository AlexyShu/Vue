<template>
  <div class="user-page">
    <button
      type="button"
      class="btn btn-primary"
      @click="openModal"
    >
      Подробнее
    </button>
    <textarea v-model="text"></textarea>
    <!-- <div  :inner-html.prop="text | emoji | upperCase"></div> -->
    <!-- {{ text | upperCase}} -->
    <modal
      v-if="isModalOpen"
      title="Пользовательское соглашение"
      @close="isModalOpen = false"
    >
      <div class="information">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas eos minus placeat saepe nisi nesciunt distinctio optio fugit.
        </p>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal'

export default {
  components: { Modal },
  data() {
    return {
      isModalOpen: false,
      text: ""
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    }
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase()
    },
    emoji(value) {
      return value.replace(':)', '😀')
    }
  }

}
</script>

<style scoped>
    .user-page {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
