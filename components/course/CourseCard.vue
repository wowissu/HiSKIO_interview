<template>
  <div class="course-card bg-white rounded shadow-lg-plus relative w-full h-full overflow-hidden shadow-lg">
    <a :href="`/course/${course.id}/about`" class="w-full bg-white flex flex-col md:space-y-2">
      <div class="w-full space-y-1 flex items-stretch md:block p-2 md:p-0">
        <!-- image box -->
        <div class="w-140px md:w-full flex-grow-0 flex-shrink-0">
          <!-- image -->
          <div class="sm:w-full rounded aspect-w-16 aspect-h-9 relative overflow-hidden">
            <div :style="{ backgroundImage: `url(${course.image})` }" class="bg-cover bg-center" />
            <!-- cover -->
            <div class="hidden md:block absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
              <div class="bg-gradient-to-t to-transparent from-black w-full h-full opacity-25" />
              <div class="flex items-center space-x-3 absolute right-0 bottom-0 pr-2 pb-2">
                <div class="text-white hover:text-yellow-500">
                  <fa :icon="['far', 'bookmark']" />
                </div>
                <div class="text-white hover:text-yellow-500" :class="{ 'text-yellow-500': inCarts }" @click.stop.prevent="toggleItemInCarts">
                  <fa icon="shopping-cart" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- title box -->
        <div class="w-full px-2 hidden md:block">
          <h1 class="sm:line-clamp-2 text-title-gray text-xl">{{ course.title }}</h1>
        </div>
        <!-- detail box -->
        <div class="w-full px-2 md:space-y-2 flex flex-col justify-between md:pb-2">
          <!-- 講師 -->
          <div class="flex items-center order-2 md:order-none">
            <img :src="firstLectures.avatar" class="w-6 h-6 rounded-full md:h-8 md:w-8">
            <p class="teacher-name text-sm sm:text-base pl-2 text-hi-gray line-clamp-1">{{ firstLectures.username }}</p>
          </div>
          <!-- 募資條 -->
          <div class="h-7 flex md:flex-col justify-between relative order-1 md:order-none">
            <div class="flex flex-no-wrap items-center justify-between text-14px text-gray-700 md:w-full">
              <p class="flex-1 hidden md:inline">剩 17 天</p>
              <p class="flex-1 text-left md:text-right w-full whitespace-no-wrap text-sm">已募資 {{ targetRate }}%</p>
            </div>
            <div class="flex-1 md:flex-none block pl-2 md:pl-0">
              <div class="w-full">
                <Progress :rate="targetRate" />
              </div>
            </div>
          </div>
          <div class="w-full order-3 md:order-none">
            <!-- 課程金額 -->
            <div class="flex items-center">
              <p class="text-hi-price leading-5 mr-1 font-medium text-sm sm:text-xl">${{ toPrice(currentPrice.price || course.fixed_price) }}</p>
              <p v-show="currentPrice.fundraising" class="text-gray-500 text-sm line-through">${{ toPrice(course.fixed_price) }}</p>
            </div>
          </div>

        </div>
      </div>
      <!-- mobile title -->
      <div class="w-full px-2 md:hidden">
        <h1 class="line-clamp-1 text-title-gray text-lg">{{ course.title }}</h1>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import dayjs from 'dayjs';
import { Course } from '~/@types/course';
import Progress from '~/components/common/Progress.vue';

const priceFormatter = new Intl.NumberFormat();

@Component({
  components: {
    Progress
  }
})
export default class CourseCard extends Vue {
  @Prop({ type: Object }) public course!: Course;

  get firstLectures () {
    return this.course.lecturers[0];
  }

  get targetRate () {
    return Math.ceil(this.course.consumers / this.course.fundraising_tickets * 100);
  }

  get currentPrice () {
    return this.course.prices.filter((p) => {
      // 檢查日期
      return p.fundraising && dayjs().isBefore(p.schedule_at);
    })[0];
  }

  /** 是否存在於購物車內 */
  get inCarts () {
    return this.$cartsStore.items.some(item => item.id === this.course.id.toString());
  }

  public toPrice (val: number) {
    return priceFormatter.format(val);
  }

  public toggleItemInCarts () {
    if (this.inCarts) {
      this.removeItem();
    } else {
      this.addItem();
    }
  }

  public addItem () {
    this.$cartsStore.addCartsItem({
      coupon: '',
      items: [
        {
          id: this.course.id.toString(),
          coupon: ''
        }
      ]
    });
  }

  public removeItem () {
    this.$cartsStore.removeCartsItem(this.course.id.toString());
  }
}
</script>

<style lang="scss" scope>
.avatar {
  width: 30px;
  height: 30px;
}

</style>
