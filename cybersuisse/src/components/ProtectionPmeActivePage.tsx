import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  onNavigate?: (page: string) => void
}

export default function ProtectionPmeActivePage(_props: Props) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/abonnements#Active', { replace: true })
  }, [navigate])
  return null
}
