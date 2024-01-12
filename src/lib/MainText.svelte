<style>

  @keyframes sway {
    0%, 100% {
      transform: rotateZ(1deg);
    }
    50% {
      transform: rotateZ(-2deg);
    }
  }

  .swaying-text {
    animation: sway 2s infinite;
  }
</style>

<script>

  import BgWheel from "./BgWheel.svelte"

  let swayBool = true;
  let buttonClicked = false;

  let bgSpinBool = true;

  function toggleSway() {
    swayBool = !swayBool;
  }

  function toggleBgSpin() {
    bgSpinBool = !bgSpinBool
  }

  let availableQuestions = [
  "Hvis du bare kunne spise én matrett resten av livet, hva hadde det vært?",
  "Hva er det mest bisarre talent du har?",
  "Hvis dyr kunne snakke, hvilket hadde vært den mest irriterende?",
  "Hva er det rareste du har spist?",
  "Hvis du kunne bytte liv med en fiktiv karakter, hvem hadde det vært?",
  "Hva er det mest ubrukelige talentet du har?",
  "Hvis du kunne ha middag med hvilken som helst historisk skikkelse, hvem ville det være?",
  "Hva er det merkeligste faktumet du kjenner?",
  
  "Hvis du kunne hatt én superkraft som du bare kunne brukt én gang om dagen, hva hadde det vært?",
  "Hvis det var én chore du ikke trengte å gjøre resten av livet, hva hadde det vært?",
  "Hvis du kunne hatt én samtale med et objekt, hvilket hadde det vært?",
  ];


  let selectedQuestions = [];
  let innsjekkText = "Trykk hvor som helst for innsjekkspørsmål"

  function handleClick() {
    if (!buttonClicked){
      if (availableQuestions.length === 0) {
        availableQuestions = selectedQuestions.slice();
        selectedQuestions = [];
      }

      if (availableQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const selectedQuestion = availableQuestions[randomIndex];

        availableQuestions.splice(randomIndex, 1);
        selectedQuestions.push(selectedQuestion);



        innsjekkText = selectedQuestion;
      } else {
        innsjekkText = "No more questions available";
      }
    }

    buttonClicked = false;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<body class=" bg-backgroundColor h-screen w-screen flex justify-center items-center flex-col z-0 overflow-hidden select-none" on:click={handleClick}>
  <div class=" h-1/2 w-3/4 flex justify-center items-center z-20">
    {#if swayBool}
      <span class=" text-fontColor font-bold tracking-wider text-5xl text-center leading-normal swaying-text">{innsjekkText}</span>
    {:else}
      <span class="text-fontColor font-bold tracking-wider text-5xl text-center leading-normal">{innsjekkText}</span>
    {/if}
  </div>

  <div class="z-20 absolute flex flex-row bottom-0 left-0">
    <div class=" mx-2 my-1">
      <button class=" bg-none text-fontColor border border-fontColor rounded py-2 px-2 active:scale-95 duration-duration-40 hover:border-fontColorHover" on:click={() => { toggleSway(); buttonClicked = true; }}>Toggle Sway</button>
    </div>
    <div class=" mx-2 my-1">
      <button class=" bg-none text-fontColor border border-fontColor rounded py-2 px-2 active:scale-95 duration-duration-40 hover:border-fontColorHover" on:click={() => { toggleBgSpin(); buttonClicked = true; }}>Toggle bg spin</button>
    </div>
  </div>
  
  <div class="z-10 absolute">
    {#if bgSpinBool}
      <BgWheel />
    {/if}
  </div>
</body>