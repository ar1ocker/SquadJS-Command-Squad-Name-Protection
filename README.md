# ⭐ If it's useful, give it a star ⭐
# SquadJS-Command-Squad-Name-Protection

# English

The plugin protects against the manual creation of a squad named "Command Squad"

**Tested on SquadJS 4.1.0**

## Installation 

- Download the repository 

```
git clone https://github.com/ar1ocker/SquadJS-Command-Squad-Name-Protection
```

Install the y18n library in Squadjs.

```
npm install y18n
```

Copy the `command-squad-name-protection.js` plugin and the `command-squad-name-protection-locales` folder to the `squadjs/squad-server/plugins` folder

- Add the new plugin to config.json (plugins section)

```
{
"plugin": "CommandSquadNameProtection",
"enabled": true,
"language": "en"
},
```

# Russian

Плагин защищает от ручного создания сквада с именем "Command Squad"

**Проверено на SquadJS 4.1.0**

## Установка

- Скачайте репозиторий

```
git clone https://github.com/ar1ocker/SquadJS-Command-Squad-Name-Protection
```

Установите библиотеку y18n

```
npm install y18n
```

Скопируйте `command-squad-name-protection.js` и `command-squad-name-protection-locales` в папку `squadjs/squad-server/plugins`

- Добавьте новый плагин в config.json (раздел plugins)

```
{
    "plugin": "CommandSquadNameProtection",
    "enabled": true,
    "language": "ru"
},
```
