<template>
	<div class="user-list-container">
		<div class="options-div">
			<label for="user-list-sort">Sort by  </label>
			<b-form-select v-model="sort" id="user-list-sort" class="user-list-sort-select" @change="onChangeHandler">
				<b-form-select-option value="1">A - Z</b-form-select-option>
				<b-form-select-option value="2">Z - A</b-form-select-option>
			</b-form-select>
		</div>
		<div v-for="user in users" :key="user">
			<ListItem :username="user" />
		</div>
	</div>
</template>

<style scoped>
.user-list-container{
	text-align: start;
}

.user-list-sort-select {
	margin: 0px 20px 20px 20px;
}
</style>

<script>
import ListItem from "./ListItem.vue";
export default {
	name: "UserListContainer",
	data: function() {
		return {
			users: ["User1", "User2"],
			sort: 1,
		}
	},
	components: {
		ListItem,
	},
	methods: {
		onChangeHandler() {
			if (this.sort == 1) {
				alert(1);
			} else if ( this.sort == 2) {
				alert(2)
			}

		}
	}
};
</script>
