import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Package2,
  Menu,
  Home,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import NavHeader from "@/components/Navbar/NavHeader";
import CardDash from "@/components/cards/card-dash";
import Dashtable from "@/components/tables/dash-table";
import Cardelements from "@/components/cards/elements-card";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <CardDash
            cardTitle="Total consomassion"
            carddata="12008,5 dh"
            cardsubdata="+2.1% depuis le mois dernier"
            Icon={DollarSign}
          />
          <CardDash
            cardTitle="budget"
            carddata="25000 dh"
            cardsubdata="+0.0% depuis le mois dernier"
            Icon={Users}
          />
          <CardDash
            cardTitle="achats"
            carddata="56"
            cardsubdata="+19% depius le mois dernier"
            Icon={CreditCard}
          />
          <CardDash
            cardTitle="fournisseurs en contrat"
            carddata="11"
            cardsubdata="bureau sarl est le plus actif"
            Icon={Activity}
          />
        </div>
        {/* cards wrapper */}
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-5">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                  Recent transactions from your store.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Dashtable />
            </CardContent>
          </Card>
          {/*table */}
          <Cardelements />
        </div>
      </main>
    </div>
  );
}
