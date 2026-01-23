import { useState } from 'react'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { IconBrandReact, IconBrandVite, IconPlus, IconMinus } from '@tabler/icons-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 3,
        p: 2,
      }}
    >
      <Stack direction="row" spacing={2}>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <IconBrandVite size={48} stroke={1.5} />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <IconBrandReact size={48} stroke={1.5} />
        </a>
      </Stack>

      <Typography level="h1">Vite + React + Joy UI</Typography>

      <Card variant="outlined" sx={{ minWidth: 300 }}>
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Typography level="title-lg">Counter Demo</Typography>
            <Typography level="h2">{count}</Typography>
            <Stack direction="row" spacing={1}>
              <Button
                startDecorator={<IconMinus />}
                onClick={() => setCount((count) => count - 1)}
                color="primary"
                variant="soft"
                size="md"
              >
                Decrease
              </Button>
              <Button
                startDecorator={<IconPlus />}
                onClick={() => setCount((count) => count + 1)}
                color="success"
                variant="soft"
                size="md"
              >
                Increase
              </Button>
            </Stack>
            <Typography level="body-sm" sx={{ mt: 2 }}>
              Edit <code>src/App.tsx</code> and save to test HMR
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      <Typography level="body-sm" textColor="text.secondary">
        Built with Joy UI and Tabler Icons
      </Typography>
    </Box>
  )
}

export default App
