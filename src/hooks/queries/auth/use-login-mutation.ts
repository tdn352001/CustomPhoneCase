import { authService } from '@/services/auth-service'
import { useMutation } from '@tanstack/react-query'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authService.login,
  })
}
