
export default function Maps() {
    const apiKey = 'AIzaSyA_xBQitddeGiQi0JxPu9sk9407HXAZ92Y'; // Substitua pela sua chave da API

    return (
    <div className="">
    <iframe
        className=" rounded-md"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=R.+T,+600+-+Aruana,+Aracaju+-+SE,+49001-000&zoom=17`}
        width="350"
        height="200"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
    ></iframe>
</div>
  );
}