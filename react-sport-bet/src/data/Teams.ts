import ACMilanImg from '@/assets/images/ac_milan.png';
import ASRomaImg from '@/assets/images/as_roma.png';
import AtalantaImg from '@/assets/images/atalanta.png';
import BolognaImg from '@/assets/images/bologna.png';
import CremoneseImg from '@/assets/images/cremonese.png';
import EmpoliImg from '@/assets/images/empoli.png';
import FiorentinaImg from '@/assets/images/fiorentina.png';
import HellasVeronaImg from '@/assets/images/hellas_verona.png';
import InternazionaleImg from '@/assets/images/internazionale.png';
import JuventusImg from '@/assets/images/juventus.png';
import LazioImg from '@/assets/images/lazio.png';
import LecceImg from '@/assets/images/lecce.png';
import MonzaImg from '@/assets/images/monza.png';
import NapoliImg from '@/assets/images/napoli.png';
import SalernitanaImg from '@/assets/images/salernitana.png';
import SampdoriaImg from '@/assets/images/sampdoria.png';
import SassuoloImg from '@/assets/images/sassuolo.png';
import SpeziaImg from '@/assets/images/spezia.png';
import TorinoImg from '@/assets/images/torino.png';
import UdineseImg from '@/assets/images/udinese.png';

export interface Team {
    id: number;
    name: string;
    imageUrl: string;
    rating: 1 | 2 | 3;
}

export const teams:Map<String, Team> = new Map([
    ['Napoli', {
        id: 1,
        name: 'Napoli',
        imageUrl: NapoliImg,
        rating: 3
    }],
    ['Lazio', {
        id: 2,
        name: 'Lazio',
        imageUrl: LazioImg,
        rating: 3
    }],
    ['AS Roma', {
        id: 3,
        name: 'AS Roma',
        imageUrl: ASRomaImg,
        rating: 3
    }],
    ['AC Milan', {
        id: 4,
        name: 'AC Milan',
        imageUrl: ACMilanImg,
        rating: 3
    }],
    ['Internazionale', {
        id: 5,
        name: 'Internazionale',
        imageUrl: InternazionaleImg,
        rating: 3
    }],
    ['Atalanta', {
        id: 6,
        name: 'Atalanta',
        imageUrl: AtalantaImg,
        rating: 2
    }],
    ['Juventus', {
        id: 7,
        name: 'Juventus',
        imageUrl: JuventusImg,
        rating: 3
    }],
    ['Bologna', {
        id: 8,
        name: 'Bologna',
        imageUrl: BolognaImg,
        rating: 2
    }],
    ['Fiorentina', {
        id: 9,
        name: 'Fiorentina',
        imageUrl: FiorentinaImg,
        rating: 2
    }],
    ['Udinese', {
        id: 10,
        name: 'Udinese',
        imageUrl: UdineseImg,
        rating: 2
    }],
    ['Torino', {
        id: 11,
        name: 'Torino',
        imageUrl: TorinoImg,
        rating: 2
    }],
    ['Sassuolo', {
        id: 12,
        name: 'Sassuolo',
        imageUrl: SassuoloImg,
        rating: 2
    }],
    ['Monza', {
        id: 13,
        name: 'Monza',
        imageUrl: MonzaImg,
        rating: 2
    }],
    ['Empoli', {
        id: 14,
        name: 'Empoli',
        imageUrl: EmpoliImg,
        rating: 2
    }],
    ['Salernitana', {
        id: 15,
        name: 'Salernitana',
        imageUrl: SalernitanaImg,
        rating: 2
    }],
    ['Lecce', {
        id: 16,
        name: 'Lecce',
        imageUrl: LecceImg,
        rating: 1
    }],
    ['Spezia', {
        id: 17,
        name: 'Spezia',
        imageUrl: SpeziaImg,
        rating: 1
    }],
    ['Hellas Verona', {
        id: 18,
        name: 'Hellas Verona',
        imageUrl: HellasVeronaImg,
        rating: 1
    }],
    ['Cremonese', {
        id: 19,
        name: 'Cremonese',
        imageUrl: CremoneseImg,
        rating: 1
    }],
    ['Sampdoria', {
        id: 20,
        name: 'Sampdoria',
        imageUrl: SampdoriaImg,
        rating: 1
    }]
]);