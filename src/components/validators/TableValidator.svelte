<script>
  export let dataCloudSkillBoost = {};
</script>

<div class="m-auto text-slate-500">
  <div>
    <p class="text-xl text-center">Details of CloudSkillsBoost Profile</p>
  </div>

  <div>
    <p class="text-md text-center">{dataCloudSkillBoost?.profileName}</p>
  </div>

  <div>
    <p class="text-md text-center">Tiers: {dataCloudSkillBoost?.tiers}</p>
  </div>

  <div class="overflow-x-auto">
    <p class="text-md text-center">Total Valid Quests: {dataCloudSkillBoost?.validQuests}</p>

    <table class="table w-full">
      <thead>
        <tr>
          <th>Quest Name</th>
          <th>Quest Date of Completions</th>
        </tr>
      </thead>
      <tbody>
        {#each dataCloudSkillBoost?.detailValidQuests as quest}
        <tr>
          <td>{quest?.questName}</td>
          <td>{quest?.questDayOfCompletion}</td>
        </tr>
        {/each}
        <tr>
          <td class="text-center" colspan="2">Total: {dataCloudSkillBoost?.validQuests}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>