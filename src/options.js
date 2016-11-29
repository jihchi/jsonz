import { h, render, Component } from 'preact';
import _ from 'lodash/fp';

const root = document.getElementById('root');

class Options extends Component {
  constructor(props) {
    super(props);

    this.state = {
      whitelist: [],
      busy: true,
    };
  }

  componentDidMount() {
    this.loadConfig();
  }

  saveConfig = () => {
    const { whitelist } = this.state;
    const nextWhitelist = _.flow(
      _.split('\n'),
      _.map(_.trim),
      _.reject(_.isEmpty),
      _.filter(_.startsWith('http'))
    )(whitelist);

    this.setState({ busy: true });

    chrome.storage.sync.set({
      whitelist: nextWhitelist,
    }, () => {
      this.setState({
        whitelist: nextWhitelist.join('\n'),
        busy: false,
      });
    });
  }

  loadConfig = () => {
    chrome.storage.sync.get({
      whitelist: [],
    }, ({ whitelist }) => {
      this.setState({
        whitelist: whitelist.join('\n'),
        busy: false,
      });
    });
  }

  render() {
    const { busy, whitelist } = this.state;

    return (
      <div>
        <h1>jsonz Options</h1>
        <div>
          <h4>Whitelist</h4>
          <div>* = wildcard</div>
          <div>
            <textarea
              style={{ width: '50%', height: 100 }}
              value={whitelist}
              onInput={this.linkState('whitelist')}
              disabled={busy}
            />
          </div>
        </div>
        <div>
          <button disabled={busy} onClick={this.saveConfig}>Save</button>
        </div>
      </div>
    );
  }
}

render(<Options />, root, root.lastChild);
