<style>
    .spinner {
      width: 250vh;
      height: 250vh;
      border-radius: 50%;
      background: conic-gradient(
        rgb(20, 20, 20) 0deg 36deg,
        rgba(0, 0, 0, 0) 36deg 72deg,
        rgb(20, 20, 20) 72deg 108deg,
        rgba(0, 0, 0, 0) 108deg 144deg,
        rgb(20, 20, 20) 144deg 180deg,
        rgba(0, 0, 0, 0) 180deg 216deg,
        rgb(20, 20, 20) 216deg 252deg,
        rgba(0, 0, 0, 0) 252deg 288deg,
        rgb(20, 20, 20) 288deg 324deg,
        rgba(0, 0, 0, 0) 324deg 360deg
      );
      animation: spin 20s linear infinite;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
</style>

<div class="spinner"></div>