import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// interface Props {
//   Icon: React.ElementType;
// }

const CardDash = ({
  cardTitle,
  carddata,
  cardsubdata,
  Icon,
}: {
  cardTitle: string;
  carddata: string;
  cardsubdata: string;
  Icon: React.ElementType;
}) => {
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{cardTitle}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{carddata}</div>
        <p className="text-xs text-muted-foreground">{cardsubdata}</p>
      </CardContent>
    </Card>
  );
};
export default CardDash;
