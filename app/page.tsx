"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Building2, Wallet, Users, AlertTriangle } from 'lucide-react';

const revenueData = [
  { name: 'Jan', revenus: 450000, depenses: 320000 },
  { name: 'Fév', revenus: 520000, depenses: 380000 },
  { name: 'Mar', revenus: 610000, depenses: 410000 },
  { name: 'Avr', revenus: 580000, depenses: 450000 },
  { name: 'Mai', revenus: 730000, depenses: 480000 },
];

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 text-slate-900 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">TALeb BTP Beta</h1>
          <p className="text-slate-500">Tableau de bord général — Casablanca, Maroc</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
          <span className="text-sm font-semibold text-gray-600">Devise : </span>
          <span className="text-sm font-bold text-blue-900">MAD (Dirham marocain)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Chiffre d'Affaires</p>
              <h3 className="text-2xl font-bold text-slate-900">2,890,000 MAD</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl"><Wallet className="text-blue-600" /></div>
          </div>
          <p className="text-sm mt-4 font-medium text-emerald-600">+12% ce mois</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Chantiers Actifs</p>
              <h3 className="text-2xl font-bold text-slate-900">12 Chantiers</h3>
            </div>
            <div className="p-3 bg-orange-50 rounded-xl"><Building2 className="text-orange-500" /></div>
          </div>
          <p className="text-sm mt-4 font-medium text-slate-600">2 livrés (Rabat & Tanger)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Ouvriers & Staff</p>
              <h3 className="text-2xl font-bold text-slate-900">145 / 152</h3>
            </div>
            <div className="p-3 bg-emerald-50 rounded-xl"><Users className="text-emerald-500" /></div>
          </div>
          <p className="text-sm mt-4 font-medium text-emerald-600">95% de présence aujourd'hui</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 bg-red-50/30">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-red-800 mb-1">Alertes Urgentes</p>
              <h3 className="text-2xl font-bold text-red-600">3</h3>
            </div>
            <div className="p-3 bg-red-100 rounded-xl"><AlertTriangle className="text-red-500" /></div>
          </div>
          <p className="text-sm mt-4 font-medium text-red-600">Stock acier critique (Casa Sud)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Suivi Financier Mensuel (MAD)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="revenus" fill="#1e3a8a" radius={[4, 4, 0, 0]} name="Revenus" />
                <Bar dataKey="depenses" fill="#f97316" radius={[4, 4, 0, 0]} name="Dépenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Activité Récente (Flux)</h3>
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-3">
              <p className="font-semibold text-sm text-slate-800">Facture payée</p>
              <p className="text-xs text-slate-500">Atlas Infrastructure — 180,000 MAD</p>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <p className="font-semibold text-sm text-slate-800">Livraison béton</p>
              <p className="text-xs text-slate-500">Chantier Résidence Horizon Casablanca</p>
            </div>
            <div className="pb-1">
              <p className="font-semibold text-sm text-slate-800">Nouveau contrat</p>
              <p className="text-xs text-slate-500">Rabat Aménagement — Projet validé</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
