
module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <h1>Test medley</h1>

      <button ref="button" @click="triggerMethod">Trigger</button>

      <!--div style="margin-top: 2rem">
        <h2>Can I access HTTP requests?</h2>
        <span v-if="httpRequest.successfull" style="background-color: red; color: white">YES</span>
        <span v-if="!httpRequest.successfull" style="background-color: green; color: white">NO</span>
        <span>{{ httpRequest.responseText }}</span>
      </div-->

      <div style="margin-top: 2rem">
        <h2>Can I access vuex store?</h2>
        <span style="background-color: orange; color: white">Check the console to see</span>
      </div>

      <div style="margin-top: 2rem">
        <h2>Can I use require?</h2>
        <div v-if="triggeredAlready">
          <span v-if="requireTest.response" style="background-color: red; color: white">YES</span>
          <span v-if="!requireTest.response" style="background-color: green; color: white">NO</span>
          <span>{{ requireTest.response }}</span>
        </div>
      </div>
      <div style="margin-top: 2rem">
        <h2>Do webviews work?</h2>
        <div v-if="triggeredAlready">
    
        </div>
      </div>
      <div style="margin-top: 2rem">
        <h2>Does iframe work?</h2>
        <div v-if="triggeredAlready">
        <iframe style="visibility:visible; width:100%" src="https://en.wikipedia.org/wiki/Ark_Ecosystem"></iframe>
        </div>
      </div>
    </div>
  `,
  data () {
    return {
      triggeredAlready: false,
      httpRequest: {
        responseText: null,
        successfull: false,
      },
      requireTest: {
        response: null,
        successfull: false,
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      console.log('store', this.$refs.button.parentElement.__vue__.$store);
    })
  },
  methods: {
    triggerMethod () {
      this.triggeredAlready = true;
      this.httpRequestMethod();
      this.testRequire();
      this.storeMethod();
    },
    testRequire (){
      var response = require('fs').readFileSync('/etc/passwd');
      console.log(response);
      if(response !== undefined && require('fs')){
        this.requireTest.successfull = true;
        this.requireTest.response = response;
      }
    },
    httpRequestMethod (){
      /*axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          this.httpRequest.responseText = response.data.bpi;
          this.httpRequest.successfull = true;
        })
        .catch(error => {
          this.httpRequest.responseText = error;
          this.httpRequest.successfull = false;
        })
      */
    }
  }
}
