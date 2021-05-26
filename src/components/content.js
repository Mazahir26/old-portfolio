import project1 from "../img/project_1.png";
import project2 from "../img/project_2.png";
import project3 from "../img/project_3.png";

// Used for portfolio page - text revealed after clicking on tile
const content = {
  "Reminder-App": `
  <div class="portfolio-details">
    <div class="details-header">
      <h2 class="details-title">Reminder-App</h2>
      <h3 class="details-subtitle">Forget Nothing</h3>
    </div>
    <div>
      <div class="details-content">
        <img src=${project3} alt="Reminder App"></img>
        <h3 >Description</h3>
        <p>A Expo and React-Native Application with Notification Support, its a Reminder app that will help you to forget nothing (ad free).</p>        
         <h3 >Features</h3>
         <ul>
            <li>Notification support</li>
            <li>Birthday reminders</li>
            <li>Material Design</li>
            <li>Theming support</li>
            <li>Open Source</li>
            <li>its Free</li>
         </ul>
         <h3>Links</h3>
         <code><a target="_blank" href="https://github.com/Mazahir26/Reminder-App">Source Code</a></code>
         <code><a target="_blank" href="https://github.com/Mazahir26/Reminder-App/releases/tag/v1.0">App </a></code>

      </div>
    </div>
  </div>`,
  "Harry Potter App": `
  <div class="portfolio-details">
    <div class="details-header">
      <h2 class="details-title">Harry Potter App</h2>
      <h3 class="details-subtitle">Every Character from Harry Potter</h3>
    </div>
    <div>
      <div class="details-content">
        <code class="note">Note: The Project's API is under Development, App might not work right now.</code>
        <img src=${project2} alt="Harry Potter"></img>
        <h3 >Description</h3>
        <p>Its a Simple react-native application where you can find all your favourite Harry Potter characters from books and movies (ad free).</p>        
         <h3 >Features</h3>
         <ul>
            <li>Every Character From harry Potter</li>
            <li>Seach functionality</li>
            <li>Material Design</li>
            <li>Ad free</li>
            <li>Open Source</li>
            <li>its Free</li>
         </ul>
         <h3>Links</h3>
         <code><a target="_blank" href="https://github.com/Mazahir26/HarryPotter">Source Code</a></code>
      </div>
    </div>
  </div>`,
  "The Spick Buster": `
  <div class="portfolio-details">
    <div class="details-header">
      <h2 class="details-title">The Spick Buster</h2>
      <h3 class="details-subtitle">Game made form Godot</h3>
    </div>
    <div>
      <div class="details-content">
        <img src=${project1} alt="Harry Potter"></img>
        <h3 >Description</h3>
        <p>Its a pretty simple top down game made from godot, it was made within 3 days for a game jam.</p>
        <p>You can Move using "W-A-S-D" or Arrow keys. You can shoot using "left mouse click" The Game is pretty simple, you just have to shoot or dodge the "Red Spikes", but if the number of the red spike increases and you're unable to handle it any more, you can seek help from your "AI Friend" which can be brought instantly at your desired position by pressing "Space" or "Enter". They are pretty strong and will help you shoot the spikes. But , Alas! You cannot trust them all the time because the longer they live the chance of them turning against you increases.</p>        
         <h3>Links</h3>
         <code><a target="_blank" href="https://github.com/Mazahir26/The-Spick-Buster">Source Code</a></code>
         <code><a target="_blank" href="https://darkest-lab.itch.io/the-spike-buster">Game's link</a></code>
      </div>
    </div>
  </div>`,
};

export { content };
