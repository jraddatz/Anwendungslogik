# Schnittstellen für die Anwendungslogik



## Lobby Schnittstellen

Die Funktionen sollen einen JSON-String nach dem vom Frontend gestellten Anforderungen zurückliefern.



| Funktionsname                | Beschreibung                                                 | Parameter                                                    |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| createLobby()                | Erstellen einer neuen Lobby                                  | int gameId, String lobbyname, String username, String password, int playerCount |
| addPlayerToLobby()           | Hinzufügen eines Spielers zu einer Lobby                     | String spielername, int lobbyId                              |
| getLobbyList()               | Gibt eine Liste aller Lobbys zurück                          | -                                                            |
| removePlayerFromLobby()      | entfernt einen Spieler aus der Lobby                         | String username, int lobbyId                                 |
| removePlayerFromLobby()      | entfernt einen Spieler aus der Lobby                         | int playerId, int lobbyId                                    |
| getPlayersInLobby()          | gibt die Spieler, die sich in einer Lobby befinden zurück    | int lobbyId                                                  |
| setLobbyReady()              | Setzt die Lobby auf bereit bzw. startet das Spiel            | int lobbyId                                                  |
| recieveMessage()             | Nimmt die Nachricht eines Spielers entgegen                  | String username, time sendTime, String message               |
| getStoredMessages()          | Gibt die Nachrichten zurück, die noch nicht gesendet wurden  | int lobbyId                                                  |
| getGeneralLobbyInformation() | Gibt den Status der Lobby und des abgefragetn Spielers in der Lobby zurück. | int lobbyId, int playerId                                    |
| addAlexa()                   | fügt Alexa zur Lobby/Spiel hinzu                             | int lobbyId                                                  |



## Editor Schnittstellen



Die Funktionen sollen einen JSON-String nach dem vom Frontend gestellten Anforderungen zurückliefern.



| Funktionsname        | Beschreibung                                            | Parameter                                                    |
| -------------------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| createGame()         | erstellt ein neues Spiel                                | String name, int ownerId, String Description, String language, int type, int minPlayers, int maxPlayers |
| cloneGame()          | Klont ein bereits Vorhandenes Spiel                     | int gameId                                                   |
| getCard()            | Gibt Informationen zu einer Karte in einem Spiel zurück | int gameId, int cardId                                       |
| addCard()            | Fügt eine neue Karte zu einem Spiel hinzu               | int gameId, String titel, int value, String image, String Descriptio, int actionIDs[] |
| editCard()           | ändert eine Karte eines Spiels                          | int gameId, int cardId, String titel, int value, String image, String Descriptio, int actionIDs[] |
| removeCard()         | entfernt eine Karte aus dem Spiel                       | int gameId, int cardId                                       |
| createDeckOfCards()  | Erstellt ein neues Kartenset für ein Spiel              | int gameId, String deckName                                  |
| addCardToDeck()      | Fügt eine Karte zu einem Kartendeck hinzu               | int gameId, int cardsetId, int cardId                        |
| removeCardFromDeck() | Entfernt eine Karte aus einem Kartenset                 | int gameId, int cardsetId, int cardId                        |
| getDeckOfCards()     | Gibt die IDs der Karten in einem Kartenset zurück       | int gameId, int cardsetId                                    |
| getDice()            | Gibt die Informationen zu einem Würfel zurück           | int gameId                                                   |
| addDice()            | Fügt einen Würfel zu einem Spiel hinzu                  | int gameId, String name, int values \[]\[]                   |
| editDice()           | Bearbeitet den Würfel eines Spiels                      | int gameId, int diceId,  String name, int values\[]\[]       |
| removeDice()         | ntfernt einen Würfel aus einem Spiel                    | int gameId, int diceId                                       |
| getPlayboard()       | Gibt das Spielbret eines Spiels zurück                  | int gameId                                                   |
| addPlayboard()       | Fügt ein Spielbrett zu einem Spiel hinzu                | int gameID, String backgroundImage, Field fields[]           |
| editPlayboard()      | Berabeitet das Spielbrett eines Spiels                  | int gameID, int boardId, String backgroundImage, Field fields[] |
| removePlayboard      | Entfern ein Spielbrett aus  einem Spiel                 | int gameID, int boardId                                      |
| getField()           | Gibt Informationen zu einem Feld zurück                 | int gameID, int fieldId                                      |
| addField()           | Fügt ein Feld zu einem Spiel hinzu                      | int gameID, int previousField, int nextField, bool start, bool finish, int maxPlayers, int allowedPlayers[], int actions[] |
| editField()          | Bearbeitet das Feld eines Spiels                        | int gameID, int fieldId, int previousField, int nextField, bool start, bool finish, int maxPlayers, int allowedPlayers[], int actions[] |
| removeField()        | Entfernt ein Feld aus einem Spiel                       | int gameId, int fieldId                                      |

