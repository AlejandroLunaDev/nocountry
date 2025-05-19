"use client"

import { useState, useEffect } from "react"
import type { Team } from "@/features/teams/types"
import { teamsData } from "@/features/teams/data/teams-data"

export function useTeams() {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Simulando una carga de datos desde una API
    const fetchTeams = async () => {
      try {
        // En un caso real, aquí haríamos un fetch a una API
        // const response = await fetch('/api/teams')
        // const data = await response.json()

        // Simulamos un pequeño retraso para mostrar el efecto de carga
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setTeams(teamsData)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Error desconocido al cargar equipos"))
        setLoading(false)
      }
    }

    fetchTeams()
  }, [])

  return {
    teams,
    loading,
    error,
  }
}
