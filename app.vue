
<template>
        <button @click="like">Like</button>
</template>
<script>
export default {
        methods: {
                like() {
                }
        }
}
</script>

<template>
<button @click="dislike">Dislike</button>
</template>
<script>
export default {
methods: {
dislike() {
}
}
}
</script>

<template>
<ButtonLike @click="handleLike"/>
<ButtonDislike @click="handleDislike"/>
</template>
<script>
import ButtonLike from './ButtonLike.vue';
import ButtonDislike from './ButtonDislike.vue';
export default {
components: {
ButtonLike,
ButtonDislike
},
methods: {
handleLike() {
},
handleDislike() {
}
}
}
</script>

<template>
        <div>
                <p>Лайки: {{ likes }}</p>
                <p>Дизлайки: {{ dislikes }}</p>
                <ButtonLike @click="handleLike" />
                <ButtonDislike @click="handleDislike" />
        </div>
</template>
<script>
import ButtonLike from './ButtonLike.vue';
import ButtonDislike from './ButtonDislike.vue';
export default {
components: {
ButtonLike,
ButtonDislike
},
data() {
return {
likes: 0,
dislikes: 0
}
},
methods: {
handleLike() {
this.likes++;
},
handleDislike() {
this.dislikes++;
}
}
}
</script>

