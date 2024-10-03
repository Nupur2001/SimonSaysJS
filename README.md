## Simon Says Game

### Overview
The **Simon Says Game** is a memory-based game where players are tasked with following a sequence of color patterns that get progressively harder. The game generates a random sequence of colors, and the player has to repeat the sequence correctly to advance to the next level. The game is implemented using HTML, CSS, and JavaScript.

### How to Play
1. **Start the Game**: Press any key on your keyboard to begin the game.
2. **Watch the Sequence**: The game will display a sequence of flashing colors.
3. **Repeat the Sequence**: Click on the colored buttons in the same order as the game displayed.
4. **Advance**: If you correctly repeat the sequence, you advance to the next level, and the sequence becomes more challenging.
5. **Game Over**: If you make a mistake, the game ends, and you can restart by pressing any key.

### Features
- **Random Sequence Generation**: The game generates random color sequences that players must follow.
- **Level System**: As players successfully repeat sequences, the game increases the difficulty by adding a new color to the sequence.
- **Game Over Screen**: If the player makes a mistake, a "Game Over" message is displayed, and the player can start a new game.

### Technologies Used
- **HTML**: Provides the structure for the game, including buttons and headings.
- **CSS**: Styles the game elements such as buttons and provides visual feedback through color changes.
- **JavaScript**: Handles the game logic, including generating the sequence, capturing user input, and checking for correct answers.

### How the Game Works
1. **Initialization**: The game starts by listening for a keypress event to begin.
2. **Sequence Generation**: Each level adds a new random color to the sequence from the available colors: Yellow, Pink, Green, and Purple.
3. **User Interaction**: Users click on the colored buttons to repeat the sequence. Each correct click allows the game to progress; incorrect clicks result in a "Game Over."
4. **Flashing Effect**: A flashing animation is used to visually indicate the sequence.

### Future Improvements
- Add sound effects to enhance the user experience.
- Implement a scoring system to track how far players progress.
- Introduce a difficulty setting to control the speed of the sequence flashes.

This game is a fun, engaging way to test and improve your memory skills!

### Demo Video
Watch the gameplay in action by checking out the Simon Says Game demo video, which showcases the sequence generation, user interaction, and level progression.
https://github.com/user-attachments/assets/8867edd4-29f2-4e41-bc32-d8ca8848de58

### Play the Game Here:
nupur2001.github.io/SimonSaysJS/
