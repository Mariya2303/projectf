Vue.createApp({
  data() {
    return {
      name: 'Vue.js'
    }
  },

  methods: {
    like() {
    },
    dislike() {
    }
  }
})

Vue.createApp({
  data() {
    return {
      likesCount: 0,
      dislikesCount: 0
    }
  },
  methods: {
    incrementLikes() {
      this.likesCount++
    },
    incrementDislikes() {
      this.dislikesCount++
    }
  }
})

Vue.createApp({
  data() {
    return {
      isLiked: false,
      isDisliked: false
    };
  },
  methods: {
    like() {
      this.isLiked = !this.isLiked;
      this.isDisliked = false;
    },
    dislike() {
      this.isDisliked = !this.isDisliked;
      this.isLiked = false;
    }
  }
})


export default {
  data() {
      return {
          likesCount: 0,
          dislikesCount: 0
      }
  }
}