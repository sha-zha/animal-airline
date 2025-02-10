"use client";

import { useState } from "react";

export default function Form() {
    const [form, setForm] = useState({ name: "", type: "" });
    const [submittedData, setSubmittedData] = useState(null); // Stocke les données soumises

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const sendSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        console.log(form)
        setSubmittedData(form); // Stocke les données pour afficher la carte
        setForm({ name: "", type: "" }); // Réinitialise le formulaire
        console.log(setSubmittedData);
        return submittedData;
    };

    return (
        <div className="container bg-zinc-50 p-6">
            <form className="grid gap-4" onSubmit={sendSubmit}>
                <input
                    onChange={handleFormChange}
                    type="text"
                    value={form.name}
                    placeholder="Entrez le nom de l'animal"
                    name="name"
                    required
                    className="border border-gray-300 p-2 rounded"
                />
                <select
                    onChange={handleFormChange}
                    name="type"
                    value={form.type}
                    required
                    className="border border-gray-300 p-2 rounded"
                >
                    <option value="">Choisir la catégorie de l'animal</option>
                    <option value="chat">Chat</option>
                    <option value="chien">Chien</option>
                </select>
                <button
                    type="submit"
                    className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
                >
                    Valider
                </button>
            </form>
        </div>
    );
}
