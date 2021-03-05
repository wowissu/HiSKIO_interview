<template>
  <div class="course-page">
    <div class="w-full p-4">
      <header class="flex items-center justify-between w-full mb-5">
        <h1 class="text-xl sm:text-2xl text-gray-454545">
          正在募資中的課程
        </h1>
        <a
          href="/search/explore?skill=0&amp;type=attendance&amp;level=ALL&amp;coursesType=courses&amp;status=PRESALE"
          class="text-gray-600 text-sm sm:text-base md:text-lg"
        >更多募資課程</a>
      </header>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div v-for="course in courses" :key="course.id">
          <CourseCard :course="course" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import CourseCard from '@/components/course/CourseCard.vue';

@Component({
  components: {
    CourseCard
  }
})
export default class CoursePage extends Vue {
  get courses () {
    return this.$courseStore.courses;
  }
}
</script>

<style lang="scss" scope>
  .container {
    @apply max-w-6xl mx-auto;
  }
</style>
