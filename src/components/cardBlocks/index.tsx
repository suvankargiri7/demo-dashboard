import { FunctionComponent } from "react";
import { Grid, Box, Card, IconButton, Typography } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

type CardBlocksProps = {};

const CardBlocks: FunctionComponent<CardBlocksProps> = (props) => {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ display: "flex", height: "150px", width: '400px' }}>
          <Box display={"flex"} flexDirection={"row"} alignItems={'center'}>
            <Box paddingX={2}>
              <IconButton>
                <CurrencyExchangeIcon color="primary"/>
              </IconButton>
            </Box>
            <Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography variant="h2" color={"primary"}>
                  300k
                </Typography>
                <Typography textTransform={"uppercase"} alignItems={"end"}>
                  USD
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Typography>1.25%</Typography>
                <TrendingUpIcon />
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ display: "flex", height: "150px", width: '400px'}}>
          <Box display={"flex"} flexDirection={"row"} padding={2}>
            <Box paddingX={2}>
              <IconButton>
                <ReceiptLongIcon color="warning"/>
              </IconButton>
            </Box>
            <Box>
              <Box display={"flex"} flexDirection={"row"} marginBottom={2}>
                <Typography variant="h5" color={"warning"}>
                  Total Amount
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Typography variant="caption"> Total Amount</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography variant="h6" color={"primary"} paddingRight={1}>
                  200k
                </Typography>
                <Typography textTransform={"uppercase"} alignItems={"end"}>
                  USD
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ display: "flex", height: "150px", width: '400px'}}>
          <Box display={"flex"} flexDirection={"row"} padding={2}>
            <Box marginLeft={4}>
              <IconButton>
                <ReceiptLongIcon color="warning"/>
              </IconButton>
            </Box>
            <Box>
              <Box display={"flex"} flexDirection={"row"} height={75}></Box>
              <Box display={"flex"}>
                <Typography variant="caption"> Previous Cycle</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"baseline"}
              >
                <Typography variant="h6" color={"primary"} paddingRight={1}>
                  200k
                </Typography>
                <Typography textTransform={"uppercase"} alignItems={"end"}>
                  USD
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardBlocks;
