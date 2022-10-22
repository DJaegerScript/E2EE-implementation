import { Injectable } from '@nestjs/common';

@Injectable()
export class PlaceholderService {
  private mainCharacters = {
    detective: 'Conan',
    soccer: 'Tsubasa',
    ninja: 'Naruto',
    pirate: 'Luffy',
  };

  getMainCharacter(signature: string): string {
    const mainCharacter = this.mainCharacters[signature] || 'nothing';

    return `You get ${mainCharacter}`;
  }

  addMainCharacter(signature: string, character: string): string {
    let item = 'nothing';
    if (!this.mainCharacters[signature]) {
      this.mainCharacters[signature] = character;
      item = character;
    }
    return `You add ${item}`;
  }
}
