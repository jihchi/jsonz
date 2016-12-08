<div>
  <h1>jsonz Options</h1>
  <div>
    <h4>Whitelist</h4>
    <div>* = wildcard</div>
    <div>
      <textarea
        disabled="{{busy}}"
        bind:value="whitelistText"
      />
    </div>
  </div>
  <div>
    <button
      disabled="{{busy}}"
      on:click="saveConfig()"
    >
      Save
    </button>
  </div>
</div>

<style>
  textarea {
    width: 50%;
    height: 100px;
  }
</style>

<script>
  import _ from 'lodash/fp';

  export default {
    data() {
      return {
        whitelist: [],
        busy: true,
      };
    },
    computed: {
      whitelistText: whitelist => whitelist.join('\n'),
    },
    onrender() {
      chrome.storage.sync.get({
        whitelist: [],
      }, ({ whitelist }) => {
        this.set({
          whitelist,
          busy: false,
        });
      });
    },
    methods: {
      saveConfig() {
        const whitelist = _.flow(
          _.split('\n'),
          _.map(_.trim),
          _.reject(_.isEmpty),
          _.filter(_.startsWith('http'))
        )(this.get('whitelistText'));

        this.set({ busy: true });

        chrome.storage.sync.set({
          whitelist,
        }, () => {
          this.set({
            whitelist,
            busy: false,
          });
        });
      }
    }
  };
</script>
