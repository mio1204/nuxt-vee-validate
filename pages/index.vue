<template>
  <validation-observer ref="obs" v-slot="OveserverProps">
    <validation-provider v-slot="ProviderProps" rules="required">
      <label for="name">お名前</label>
      <input v-model="name" type="text" id="name" name="名前" />
      <div class="error">{{ProviderProps.errors[0]}}</div>
    </validation-provider>
    <button type="button" :disabled="OveserverProps.invalid || !OveserverProps.validated">送信</button>
  </validation-observer>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
