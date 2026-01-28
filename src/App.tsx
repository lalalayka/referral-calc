import { useState } from 'react'
import { Box, Button, ModalClose, LinearProgress, Modal, Sheet, Slider, Typography, Stack, Divider } from '@mui/joy'

function App() {
  const [btcXauLots, setBtcXauLots] = useState(0)
  const [fxLots, setFxLots] = useState(0)

  // Calculate percentage: (btcXauLots/2 + fxLots/3) * 100
  const percentage = ((btcXauLots / 2 + fxLots / 3) * 100)

  // Determine progress color
  const getProgressColor = () => {
    if (percentage === 0) return 'neutral'
    if (percentage >= 100) return 'success'
    return 'neutral'
  }

  return (
    <Box sx={{ bgcolor: 'background.level1', minHeight: '100vh', p: 2 }}>
      <Modal
        open={true}
        onClose={() => { }}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            position: 'relative',
            m: 2,
          }}
        >
          {/* Close button */}
          <ModalClose variant="plain" sx={{ m: 1 }} />

          {/* Header */}
          <Typography level="h4" component="h2" sx={{ mb: 1 }}>
            Trading Volume Goal
          </Typography>

          {/* Body text */}
          <Stack direction="column" spacing={1} sx={{ mb: 2 }}>
            <Typography level="body-sm">
              2 lots total on BTCUSD / XAUUSD,<br />
              or 3 lots total on USDJPY / EURUSD / GBPUSD.
            </Typography>

            <Typography level="body-sm">
              You can combine instruments from both groups.<br />
              (BTC/XAU lots ÷ 2) + (FX lots ÷ 3) ≥ 1.00 (100%).
            </Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />

          {/* Sliders Section */}
          <Stack direction="column" gap={3}>

            <Typography level="title-sm">
              Trading calculator, lots
            </Typography>

            {/* Sliders */}
            <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' } }} gap={3}>

              {/* Left slider - BTCUSD / XAUUSD */}
              <Stack flex={1} gap={2}>
                <Typography level="body-xs">
                  BTCUSD / XAUUSD
                </Typography>
                <Slider
                  variant="solid"
                  color='neutral'
                  value={btcXauLots}
                  onChange={(_, value) => setBtcXauLots(value as number)}
                  min={0}
                  max={2}
                  step={0.1}
                  marks={[
                    { value: 0, label: '0' },
                    { value: 2, label: '2+' },
                  ]}
                  valueLabelDisplay="on"
                />
              </Stack>

              {/* Right slider - USDJPY / EURUSD / GBPUSD */}
              <Stack flex={1} gap={2}>
                <Typography level="body-xs">
                  USDJPY / EURUSD / GBPUSD
                </Typography>
                <Slider
                  variant="solid"
                  color='neutral'
                  value={fxLots}
                  onChange={(_, value) => setFxLots(value as number)}
                  min={0}
                  max={3}
                  step={0.1}
                  marks={[
                    { value: 0, label: '0' },
                    { value: 3, label: '3+' },
                  ]}
                  valueLabelDisplay="on"
                />
              </Stack>
            </Stack>

            {/* Progress bar */}
            <Stack spacing={1}>
              <LinearProgress
                determinate
                size='lg'
                value={Math.min(percentage, 100)}
                color={getProgressColor()}
              />
              <Typography level="body-md" textAlign="center">
                {percentage >= 100 ? 'Success!' : `${Math.round(percentage)}%`}
              </Typography>
            </Stack>

          </Stack>

          {/* Action button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="solid" color="primary" size='lg'>
              Got it
            </Button>
          </Box>
        </Sheet>
      </Modal>
    </Box>
  )
}

export default App
