import BasePlugin from './base-plugin.js';
import y18n from 'y18n';

export default class CommandSquadNameProtection extends BasePlugin {
  static get description() {
    return 'The plugin protect a command squad name for correct working other plugins';
  }

  static get defaultEnabled() {
    return false;
  }

  static get optionsSpecification() {
    return {
      language: {
        required: false,
        description: 'Plugin language',
        default: 'en'
      }
    };
  }

  constructor(server, options, connectors) {
    super(server, options, connectors);
    this.locale = y18n({
      locales: this.options.language,
      directory: './squad-server/plugins/command-squad-name-protection-locales'
    }).__;

    this.checkSquadName = this.checkSquadName.bind(this);
  }

  async mount() {
    this.server.on('SQUAD_CREATED', this.checkSquadName);
  }

  async checkSquadName(data) {
    if (data.squadName === 'Command Squad') {
      await this.server.rcon.execute(`AdminDisbandSquad ${data.player.teamID} ${data.squadID}`);
      await this.server.rcon.warn(
        data.player.eosID,
        this.locale`Creating a squad with this name is prohibited`
      );
    }
  }
}
