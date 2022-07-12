<script>
  export let link = "";
</script>
<div class="arrow-container">
<a href={link}>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174 154"><defs><style>.cls-1{fill:none;stroke:#221f20;stroke-miterlimit:10;}</style></defs><line class="cls-1" x1="34.12" y1="77.39" x2="140" y2="77.39"/><polyline class="cls-1" points="98.81 39.26 139.66 77.39 98.81 114.84"/></svg>
</a>
</div>
<style type="scss">
	@import '../../variables.scss';
  .arrow-container {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: flex-end;
    flex-grow: 1;
    
    svg {
      height: 100px;
      max-height: 100px;
    }
  }
</style>
