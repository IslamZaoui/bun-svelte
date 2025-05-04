<script lang="ts">
	let count = $state(0);
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<button class="rounded-md bg-blue-500 p-4 text-white" onclick={() => count++}>
		Count: {count}
	</button>
</div>
