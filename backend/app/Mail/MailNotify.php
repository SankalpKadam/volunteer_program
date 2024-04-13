<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;

class MailNotify extends Mailable
{
    use Queueable, SerializesModels;
    private $data = [];
    // private $pdf =  []
    /**
     * Create a new message instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('sankalp.grinds@gmail.com','Sankalp Kadam'),
            subject: $this->data['subject']
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view:'mail.email_sent',
            with:[
                'name'=>$this->data['name'],
                'body'=>'We are excited to have you on our volunteer portal'
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        // if ($this->data['pdf']) {
        //     # code...
            return [
                // Attachment::fromData(fn () => $this->data['pdf']->output(),"Recommendation.pdf")->withMime('application/pdf'),
            ];
        // }
    }
}
