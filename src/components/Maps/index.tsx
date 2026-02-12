
export default function Maps() {
    const apiKey = 'AIzaSyA_xBQitddeGiQi0JxPu9sk9407HXAZ92Y'; // Substitua pela sua chave da API

    return (
    <div className="">
    <iframe
        className=" rounded-md"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Av.+Delmiro+Goulveia,+400+-+Coroa+do+Meio,+Aracaju+-+SE,+491035-500&zoom=17`}
        width="300"
        height="203"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
    ></iframe>
</div>
  );
}