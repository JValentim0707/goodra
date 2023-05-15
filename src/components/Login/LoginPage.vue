<template>
    <div>
        <h1>Just Test</h1>
    </div>
</template>

<script>

import { getMoviesRecently } from '@/service/movies';

export default {
  name: "HomePage",

  mounted: async () => {
    await getMoviesRecently()
  },

  computed: {

  },
  methods: {
  },
};
</script>