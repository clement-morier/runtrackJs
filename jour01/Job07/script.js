function jourTravaille(date){
    const annee = date.getFullYear();
    const mois = date.getMonth() + 1;
    const jour = date.getDate();
    const joursFeriers = ["2024-01-01","2024-04-01","2024-05-01","2024-05-08","2024-05-30","2024-06-10","2024-07-14","2024-08-15","2024-11-01","2024-11-11","2024-12-25"];
    const jourSemaine = date.getDay();
    const dateString = date.toISOString().slice(0,10);
    if (joursFeriers.includes(dateString)) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour}/${mois}/${annee} est un week-end.`);
    } else {
        console.log(`Oui, ${jour}/${mois}/${annee} est un jour travaillé.`);
    }
}