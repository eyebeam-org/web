<script>

	import HeaderBeam from '$lib/graphics/header-beam.svelte';
  export let trayOpen


</script>
<div class="menu-content" class:open={trayOpen}>
<div class="home" role="header">
<a href="/" class="eyebeam-text" aria-label="eyebeam-homepage">EYEBEAM<HeaderBeam /></a>
</div>
</div>



<style lang="scss">
	@import '../../variables.scss';

		.menu-content {
      transition: transform 0.5s $transition;
      &.open {
        transform: translateY(240px);
      }

      position: relative;
      display: block;
			width: 100%;
			padding-top: 20px;
			text-align: center;
      display:flex;
      text-align: left;
      padding-left: $LARGE * 1.5;
      .home {
        font-family: $ALT_FONT;
        font-size: $font-size-logo;
        .eyebeam-text {
          text-decoration: none;
          font-weight: 600;
        }
        }
        @include screen-size('small') {
          display: none;
        }
			}
</style>
