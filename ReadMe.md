# React Eğitim Video Serisi
Bu repository React hakkında hazırlamış ve YouTube kanalımda(**Mehmet Ali FIRAT**) yayınlamış olduğum *__React-Redux Eğitim__* serisinde hazırladığım proje dosyalarını içermektedir.

## -> Ders-15
Yeni uygulama oluşturuldu. Uygulamaya ***react-router-dom*** paketi eklendi ve oluşturulan örnek sayfalar arasında yönlendirme işlemi yapıldı.

App dosyasına Yönlendirme ile ilgili bileşenlerin eklenmesi

    import { BrowserRouter, Route } from 'react-router-dom'

Bir bileşeni ilgili route'a gidildiğinde gösterilmesi

    <Route component={Home} path='/' exact/>

### Ders-14
Kullanici durum degistirme islemi yapildi. Dizi icindeki elemanı bulma isleminde yine **map()** metodu kullanıldı.

    let tUsers = this.state.users.map(us => {
      if (us.id === data.id) {
        us.state = data.state
      }
      return us;
    })

### Ders-13
Kullanıcı silme işlemi eklendi. Kullanıcı olmaması durumunda gösterilecek uyarı yapıldı. **filter()** metodu ile kullanıcıyı listeden çıkarıp yeni liste oluşturuldu.

    let tUsers = this.state.users.filter(us => {
      return us.id !== id
    })

### Ders-12
Node Package Manager(npm) ile _bootstrap_ frameworkü eklendi ve css düzenlemesi yapıldı.
Kurulum

    npm install bootstrap

**index.js** dosyası içerisinde

    import 'bootstrap/dist/css/bootstrap.min.css'

### Ders-11
Spread operatörü ile(**[...]**) dizi ve elemanları birleştirip yeni dizi yapma işlemi yapıldı ve ***setState*** metodu ile state güncelleme işlemi yapıldı.

    let tUsers = [...this.state.users,user]
    this.setState({
      users:tUsers,
      idx: id+1
    })

### Ders-10
Ekleme işlemi için Form yapısı eklendi. App içerisinde oluşturulan _addUser_ metodu props olarak **AddUser** bileşenine gönderildi.

### Ders-9
Liste ile çalışıldı. App bileşeni içerisindeki bir listeyi UserList bileşenine props olarak gönderildi. UserList içerisinde map fonskiyonu sayesinde her bir elemanı User bileşenine props olarak gönderildi.

    array.map(item=> {
      return(...)
    })



### Ders-8
props ile bileşenler arası veri aktarımı yapıldı.

    <User name="Mehmet" state="online" metod={ConsoleLog} />

### Ders-7
create-react-app scripti kullanılarak geliştirme ortamı oluşturuldu ve çalıştırıldı.

    npx create-react-app user-app
    cd user-app
    npm start

### Ders-6
DOM olayları ile State güncellendi.

### Ders-5
Sınıf tipinde bileşene State(Durum) nesnesi eklendi

### Ders-4
Sınıf, Fonksiyon ve Lambda Fonksiyonlar ile Bileşenler oluşturuldu.

### Ders-3
CDN linkleri eklendi ve ilk element oluşturuldu.