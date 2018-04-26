// Init Firebase
const db = Firebase.getInstance().getDB();

class Projects {
    async getAllProjects() {
        const projects = await db.collection("projects").get().then((querySnapshot) => {
            return querySnapshot.forEach((doc) => {
            return doc.data();
            });
        });
        return projects;
    }
}
