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
  "Hva er 'funfacten' du kjenner til?",
  "Hvis du kunne hatt én superkraft som du bare kunne brukt én gang om dagen, hva hadde det vært?",
  "Hvis det var én chore du ikke trengte å gjøre resten av livet, hva hadde det vært?",
  "Hvis du kunne hatt én samtale med et objekt, hvilket hadde det vært?",
  "Hvis du kunne være et sted i verden akkurat nå, hvor ville det vært?",
  "Et musikkinstrument du automatisk hadde mestret, hvilket hadde det vært?",
  "Hva er den mest uvanlige maten du har laget selv?",
  "Hva er den mest absurde situasjonen du har vært i?",
  "Hva er den rareste interessen du har?",
  "Hva er den rareste tingen du har samlet på?",
  "Hvis du kunne være en superhelt's sidekick, hvilken superhelt hadde du valgt?",
  "Hva er den rareste drømmen du har hatt som du faktisk husker?",
  "Hva er den mest absurde saken du har sett på nyhetene?",
  "Hva er den mest bisarre teorien du har hørt om?",
  "Hva er den rareste maten du har laget mens du var sulten sent på kvelden?",
  "Hva er den mest bisarre tanken du har hatt mens du stirret ut i det tomme rommet?",
  "Hva er den rareste tingen du har funnet i kjøleskapet ditt?",
  "Hva er den mest absurde tingen du har sett noen gjøre på offentlig transport?",
  "Hvis du kunne velge et ferdighet fra et dyr, hvilken ville det vært?",
  "Hva er den rareste trenden du har sett på sosiale medier?",
  "Hvis du kunne ha valgt et annet navn til deg selv, hva ville det vært?",
  "Hvis du kunne reise tilbake i tid og være vitne til et historisk øyeblikk, hvilket ville du valgt?",
  "Hvis du kunne ha en overnaturlig evne utenfor det vanlige, hva ville det vært?",
  "Hvis du kunne bli ekspert i en form for kunst over natten, hvilken ville det vært?",
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
        innsjekkText = "Ikke flere spørmsål";
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

  <div class="z-20 absolute flex flex-row bottom-0 left-0 justify-start items-end">

    <div class=" mx-2 my-2">
      <button class=" bg-none text-fontColor border border-fontColor rounded py-2 px-2 active:scale-95 duration-duration-40 hover:border-fontColorHover" on:click={() => { toggleSway(); buttonClicked = true; }}>Toggle Sway</button>
    </div>

    <div class=" mx-2 my-2">
      <button class=" bg-none text-fontColor border border-fontColor rounded py-2 px-2 active:scale-95 duration-duration-40 hover:border-fontColorHover" on:click={() => { toggleBgSpin(); buttonClicked = true; }}>Toggle bg</button>
    </div>

    <div class=" mx-2 my-2">
      <a href="https://github.com/Flammemus/QuestionGenerator" target="_blank"><span class=" text-fontColor underline hover:text-blue-500" on:click={() => { buttonClicked = true; }}>Github project page</span></a>
    </div>

  </div>
  
  <div class="z-10 absolute">
    {#if bgSpinBool}
      <BgWheel />
    {/if}
  </div>
</body>
