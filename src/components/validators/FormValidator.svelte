<script>
  import TableValidator from "./TableValidator.svelte";

  export let placeholderText;
  export let buttonText;

  let qwiklabsUrl = "";

  let isDataFetched = false;
  let tableData = "";
  let errorMessage;

  const formOnSubmitHandler = async () => {
    try {
      const baseUrl = import.meta.env.PUBLIC_BE_URL;

      const response = await fetch(`${baseUrl}/`, {
        method: "POST",
        body: JSON.stringify({
          qwiklabsUrl,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();

      isDataFetched = true;
      tableData = data;

      console.log(tableData);
    } catch (err) {
      errorMessage = JSON.stringify(err);
    }
  };
</script>

<form
  class="flex flex-col place-items-center mt-4"
  on:submit|preventDefault={formOnSubmitHandler}
>
  <div class="form-control">
    <input
      type="text"
      class="py-2 px-4 rounded w-80 focus:outline-none focus:border-[#4285f4] focus:ring-[#4285f4] focus:ring-1 text-slate-500"
      placeholder={placeholderText}
      bind:value={qwiklabsUrl}
    />
  </div>

  <div class="form-control my-4">
    <button
      class="mx-auto leading-[1.35] text-xl font-normal text-white bg-[#1aa260] hover:bg-[#4285f4] px-4 py-2 rounded"
      type="submit"
    >
      {buttonText}
    </button>
  </div>
</form>

{#if isDataFetched && !errorMessage}
  <TableValidator dataCloudSkillBoost={tableData} />
{/if}

{#if errorMessage}
  <div>Something wicked happened: {errorMessage}</div>
{/if}