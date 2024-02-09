import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img src="icon-profile.png" class = "icon-account"/>
        <a class="text-header">Account</a>
        <image src="esc.png" class = "icon-esc"/>
      </div>
      <bottom>
        <form>
          <textArea class="text-area">เพิ่มเรื่องราวที่นี่</textArea>
          <img src="pic.png" class = "icon-pic"/>
          <a class="text-icon">รูปภาพ</a>
          <img src="gps.png" class = "icon-gps"/>
          <a class="text-icon">ตำแหน่ง</a>
          <img src="hashtag.png" class = "icon-hashtag"/>
          <a class="text-icon">Hashtag</a>
          <input type="submit" value="Post" class="button"></input>
        </form>
      </bottom>
    </div>
  ); 
}

export default App;
