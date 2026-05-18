import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  onNavigate?: (page: string) => void
}

export default function ProtectionPmePremiumPage(_props: Props) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/abonnements#Premium', { replace: true })
  }, [navigate])
  return null
}
