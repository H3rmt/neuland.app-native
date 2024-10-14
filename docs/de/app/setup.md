# Entwicklungsumgebung einrichten

## Voraussetzungen

1. Forke das Repository und klone es auf deinen lokalen Rechner.
2. Installiere die erforderliche Software:

   - [Visual Studio Code](https://code.visualstudio.com/)
   - [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) (für iOS-Entwicklung, nur macOS)
   - [Android Studio](https://developer.android.com/studio) (für Android-Entwicklung)

3. Installiere die benötigten Abhängigkeiten:

   - [Node.js](https://nodejs.org/en/) 18 LTS oder höher
   - [Bun](https://bun.sh) oder nutze npm, wenn du die Abhängigkeiten nicht änderst
   - [Watchman](https://facebook.github.io/watchman/docs/install) (für Linux- oder macOS-Nutzer)

4. Es wird empfohlen, die [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) und [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Erweiterungen für deine IDE zu verwenden, um Echtzeit-Feedback zu deinem Code zu erhalten.

5. Installiere die Projektabhängigkeiten, indem du den folgenden Befehl im Projektverzeichnis ausführst:

   ```sh
   bun install
   ```

6. Richte den Emulator ein

   Android (_Windows, macOS und Linux_):

   - Folge der [offiziellen Anleitung](https://docs.expo.dev/workflow/android-studio-emulator/), um den Android-Emulator einzurichten.

   iOS (_nur macOS_):

   - Folge der [offiziellen Anleitung](https://docs.expo.dev/workflow/ios-simulator/), um den iOS-Simulator einzurichten.

7. Erstelle einen Entwicklungsbuild für deine gewünschte Plattform.

   ```sh
   bun ios
   bun android
   ```

::: warning Hinweis

Schritt 7 ist jedes Mal erforderlich, wenn die Abhängigkeiten aktualisiert werden.

:::

## Entwicklung

1. Erstelle einen neuen Branch von deinem Fork, um zum Projekt beizutragen. Verwende einen beschreibenden Branch-Namen.
2. Mache deine Änderungen und stelle sicher, dass der Code unserem Coding-Stil und den Konventionen folgt.
3. Starte die App lokal mit Expo, indem du folgenden Befehl im Projektverzeichnis ausführst:

   ```sh
   bun start
   ```

Dies ermöglicht es dir, die App mit dem zuvor erstellten Entwicklungs-Build auszuführen. Expo Go wird für die Entwicklung nicht unterstützt.

## Änderungen commiten

1. Committe deine Änderungen in deinen Branch. Um beschreibende Commit-Nachrichten zu gewährleisten, empfehlen wir die Verwendung des Angular Commit-Nachricht-Stils.
2. Erstelle einen Pull-Request von deinem Branch zum Develop-Branch dieses Repositories.
3. Gib einen klaren und beschreibenden Titel sowie eine Beschreibung für deine Pull-Request an, welcher die vorgenommenen Änderungen zusammenfasst.
4. Sobald dein Pull-Request eingereicht ist, wird unser Team deine Änderungen überprüfen und dir ein Feedback geben und gegebenenfalls weitere Änderungen anfordern.

::: details Details zum Angular Commit-Nachricht-Stil

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|
  │                          devtools
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

:::

## Code-Stil

- Halte dich an den bestehenden Code-Stil und die Konventionen des Projekts.
- Verwende aussagekräftige Variablen- und Funktionsnamen, um die Lesbarkeit des Codes zu verbessern.
- Dokumentiere deinen Code bei Bedarf mit Inline-Kommentaren.

Wir verwenden den **Husky** Git-Hook, um Commits automatisch gemäß den ESLint-Regeln zu korrigieren und sie mit Prettier zu formatieren.
Du kannst diese Befehle aber auch manuell ausführen:

- `bun lint` um nach Linting-Fehlern zu suchen
- `bun lint:fix` um Linting-Fehler automatisch zu beheben
- `bun format` um den Code mit Prettier zu formatieren

## Probleme und Diskussionen

- Wenn du auf einen Fehler stößt oder eine Verbesserung vorschlagen möchtest, erstelle bitte ein Issue.
- Für Fragen oder allgemeinere Anliegen erstelle einen Thread im Diskussions-Tab.